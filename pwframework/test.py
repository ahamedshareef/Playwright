import random


def roll_dice(amount: int =2) -> list[int]:
    if(amount<=0):
        raise ValueError
    
    rolls:list[int] =[]
    for i in range(amount):
        roll_dice:int = random.randint(1,6)
        rolls.append(roll_dice)
    return rolls

def main():
    while True:
        try:
            user_input:str = input(f"How many times should the dice be rolled ? : ")

            if user_input.lower() == 'exit':
                print("Thanks ! for playing")
                break

            print(roll_dice(int(user_input)))
        except ValueError:
            print(f"Please Enter a valid number or type Exit!")

if __name__ == '__main__':
    main()