# Import required modules
import RPi.GPIO as GPIO

# Declare the GPIO settings
GPIO.setmode(GPIO.BOARD)

# set up GPIO pins
GPIO.setup(7, GPIO.OUT) # Connected to PWMA
GPIO.setup(12, GPIO.OUT) # Connected to AIN1
GPIO.setup(18, GPIO.OUT) # Connected to PWMB
GPIO.setup(15, GPIO.OUT) # Connected to BIN1

# Reset all the GPIO pins by setting them to LOW
GPIO.output(7, GPIO.LOW) # Set PWMA
GPIO.output(12, GPIO.LOW) # Set AIN1
GPIO.output(18, GPIO.LOW) # Set PWMB
GPIO.output(15, GPIO.LOW) # Set BIN1
