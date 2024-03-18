# This is a sample Python script.

# Press ⌃R to execute it or replace it with your code.
# Press Double ⇧ to search everywhere for classes, files, tool windows, actions, and settings.
import cv2
import torch
import yolov5
import numpy as np
model = yolov5.load('/Users/sreyaskv/PycharmProjects/Drowsinessdetector/venv/drowsy.pt')
print(type(model))
cap=cv2.VideoCapture(0)
while cap.isOpened():
    ret,frame=cap.read()
    result=model(frame)
    cv2.imshow('YOLO', np.squeeze(result.render()))
    if cv2.waitKey(10) & 0xFF == ord('q'):
        break
cap.release()
cv2.destroyAllWindows()


# See PyCharm help at https://www.jetbrains.com/help/pycharm/
