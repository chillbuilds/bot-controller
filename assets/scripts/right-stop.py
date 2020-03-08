# Import required modules
import RPi.GPIO as GPIO

# Declare the GPIO settings
GPIO.setmode(GPIO.BOARD)

# set up GPIO pins
GPIO.setup(7, GPIO.OUT) # Connected to PWMA
GPIO.setup(13, GPIO.OUT) # Connected to AIN2
GPIO.setup(40, GPIO.OUT) # Connected to PWMB
GPIO.setup(36, GPIO.OUT) # Connected to BIN1

# Reset all the GPIO pins by setting them to LOW
GPIO.output(13, GPIO.LOW) # Set AIN2
GPIO.output(36, GPIO.LOW) # Set BIN1