# This is a sample Python script.

# Press ⌃R to execute it or replace it with your code.
# Press Double ⇧ to search everywhere for classes, files, tool windows, actions, and settings.
import cv2
import torch
import yolov5
import numpy as np
import time

drowsy_count = 0  # Counter for consecutive drowsy detections
start_time = None
model = yolov5.load('/Users/sreyaskv/PycharmProjects/Drowsinessdetector/venv/share/drowsyfinal.pt')
print(type(model))
cap=cv2.VideoCapture(0)
while cap.isOpened():
    ret,frame=cap.read()
    results=model(frame)
    cls=results.pandas().xyxy[0].iloc[:,6][0]
    try:
        if cls=="drowsy":
            if start_time is None:
                start_time=time.time()
            drowsy_count+=1
        else:
            start_time=None
            drowsy_count=0

        if drowsy_count >= 5 and start_time is not None:
            current_time = time.time()
            elapsed_time = current_time - start_time
            if elapsed_time >= 5:  # Check for 5 seconds
                print("Drowsiness detected for 5 seconds! Stay awake!")
                start_time = None  # Reset timer after alert
                drowsy_count = 0
    except:
        print("Nothing")


    cv2.imshow('YOLO', np.squeeze(results.render()))
    # Extract only the class labels

    # Print the detected classes
    if cv2.waitKey(10) & 0xFF == ord('q'):
        break
cap.release()
cv2.destroyAllWindows()


# See PyCharm help at https://www.jetbrains.com/help/pycharm/
