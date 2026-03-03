# age = 16
# if age < 18:
    # print("You are not allowed to watch the following program.Kindly switch!")
# else:
    # print("Sit back,Relax and enjoy.")

# age = 14
# if age < 15 :
#     print("Wewe ni underage,enda uza uji!")
# elif age >=15 and age <= 18:
#     print("Unaweza watch lakini kwa ruhusa ya mzazi.")
# elif age >18 and age < 40:
#     print("Kaa chini ujinice.")
# else:
#    print("Ushapitwa na wakati!")

# i = 0
# for i in range (0,11):
    # print("The new value of i is: ",i)

const number = (n) =>{
    for (a = 1; a <= n; ){
    (if n % 3 == 0){
        console.log("Fizz")
    }
    else if(n % 5 == 0){
        console.log("Buzz")
    }
    else if(n % 3 == 0 && n % 5 === 0){
        console.log("FizzBuzz")
    }
    else{
        console.log(n)
    }

}
}
number(50);