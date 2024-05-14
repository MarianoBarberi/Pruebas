import pyautogui
import random
import time


while True:
    # Get the screen's dimensions
    screen_width, screen_height = pyautogui.size()

    # Generate random coordinates
    target_x = random.randint(0, screen_width)
    target_y = random.randint(0, screen_height)

    # Calculate the duration for the movement (in seconds)
    duration = random.uniform(0.5, 1.5)  # Random duration between 0.5 and 1.5 seconds

    # Move the mouse to the random coordinates softly
    pyautogui.moveTo(target_x, target_y, duration=duration)

    # Wait before moving again
    time.sleep(30)

    pyautogui.moveTo(505, screen_height - 20, duration=0.5)
    pyautogui.click()
    time.sleep(5)
    pyautogui.click()