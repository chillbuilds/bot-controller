# Import required modules
import RPi.GPIO as GPIO

# Declare the GPIO settings
GPIO.setmode(GPIO.BOARD)

# set up GPIO pins
GPIO.setup(7, GPIO.OUT) # Connected to PWMA
GPIO.setup(11, GPIO.OUT) # Connected to AIN1
GPIO.setup(40, GPIO.OUT) # Connected to PWMB
GPIO.setup(38, GPIO.OUT) # Connected to BIN2

# Reset all the GPIO pins by setting them to LOW
GPIO.output(11, GPIO.LOW) # Set AIN1
GPIO.output(38, GPIO.LOW) # Set BIN2