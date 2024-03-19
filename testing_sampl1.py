import cv2
import torch
import yolov5
import numpy as np
import winsound

model = yolov5.load('C:/Users/gorakh/OneDrive/Desktop/JagteRaho/drowsyfinal.pt')
print(type(model))

cap = cv2.VideoCapture(0)
is_drowsy = False  # Flag to track drowsiness state
drowsy_counter = 0  # Counter to keep track of consecutive drowsy frames

while cap.isOpened():
    ret, frame = cap.read()
    result = model(frame)
    cv2.imshow('YOLO', np.squeeze(result.render()))
    
    # Check if the 'q' key is pressed to exit the loop
    if cv2.waitKey(10) & 0xFF == ord('q'):
        break
    
    # Check for drowsiness detection
    # Here, you would typically implement the logic for drowsiness detection based on the result of your YOLOv5 model
    
    # For demonstration purposes, let's assume that drowsiness is detected
    drowsiness_detected = True  # Replace this with your actual drowsiness detection logic
    
    if drowsiness_detected:
        drowsy_counter += 1
        if drowsy_counter >= 50:  # Assuming each frame corresponds to 0.1 seconds
            is_drowsy = True
            winsound.Beep(1000, 5000)  # Play a high pitch beep sound for 0.5 seconds
    else:
        drowsy_counter = 0
        is_drowsy = False

    # Check if drowsiness has been continuously detected for 5 seconds
    if is_drowsy:
        print("Drowsiness detected for 5 seconds")
        break

cap.release()
cv2.destroyAllWindows()




