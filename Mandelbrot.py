'''
Name: Deniza Malataeva
Date: January 29, 2015
Description: The Mandelbrot Set fractal visual representation.
The program draws a Mandelbrot Set fractal basing on the complex plane.
Moreover, basing on how many iterations are made with the complex number, the fractal uses
different colours to draw itself.
Known Issues: The fractal is drawn pixel by pixel with pygame.draw.line() thus it cannot be drawn
"piece by piece" like many fractals. It cannot have a draw speed, because it would simply be useless.
Zooming into a fractal also would not be possible in this case.
'''

import pygame, os
pygame.init()

def checkhue(n): # Checks number of iterations to give colour value
    mandelhue=pygame.Color(0+n*8,0+n*2,0+n*2)
    if n>5 and n<11:
        mandelhue=pygame.Color(0+n*8,0+n,0+n*2)
    elif n>10 and n<16:
        mandelhue=pygame.Color(0+n*6,0+n*5,0+n*2)        
    elif n>15 and n<21:
        mandelhue=pygame.Color(0+n*7,0+n*4,0+n*4)   
    elif n>20 and n<26:
        mandelhue=pygame.Color(0+n*7,0+n*5,0+n*3)
    elif n>25:
        mandelhue=pygame.Color(0,0,0)  # Colours complete areas of imaginary numbers  
        
    return mandelhue
    
def checkset(c): # Main algorithm for the Set and number of it.
    a=0
    for i in  range (0,30):
        a=a**2+c
        if abs(a)>2:
            break
    return i


width=800 # Settings for Pygame display
height=600
backgr=pygame.Color(140,0,0)
screen=pygame.display.set_mode((width,height))
screen.fill(backgr)


print ("Initializing...") # Used in Shell/Command line to indicate when fractal is being drawn

for i in range (0,800):
    r=i/200-2.5 # Calculations to place the fractal according to window resolution
    for t in range(0,600):
        im=t/200-1.5
        c=complex(r,im)
        n=checkset(c)
        mandelhue=checkhue(n)
        pygame.draw.line(screen,mandelhue,(i,600-t),(i,600-t)) # Uses pygame.draw.line() because pixel drawing was not available
        
print ("Complete.") # Used in Shell/Command line to indicate when a fractal is done or the procedure went smoothly

while True: # Main loop
    pygame.event.pump()
    for event in pygame.event.get():
        if event.type==pygame.QUIT:
            pygame.display.quit()
            exit()
    pygame.display.flip()    

