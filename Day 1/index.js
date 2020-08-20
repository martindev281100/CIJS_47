// kieu du lieu cua js

const dataStructureDemo = () => {
    let a = 'Hello\
    world'
    console.log(a)
    // a = true
    console.log(a.trim())
    console.log(a.split(' '))

    let arr = [1, 2, 3, 4, 5, 1, 2, 3]
    let arr2 = []
    // arr.unshift(0)
    // console.log(arr)
    console.log(arr.lastIndexOf(1))
    arr2 = arr.filter(elm => elm > 2)
    console.log(arr2)
    arr2 = arr2.map(elm => elm * 2)
    console.log(arr2)
    const student = {
        name: "An",
        age: 19,
        sing: () => {
            console.log('Sing a songg')
        }
    }
    student.name = 'User'
    console.log(student.name)
    student.sing()
    const date = new Date()
    const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']
    console.log(dayOfWeek[date.getDay()])
    console.log(date.getMonth() + 1)
    console.log(date.getFullYear())

}
dataStructureDemo()

let isHidden = false
document.querySelector('.button-wrapper #myButton').addEventListener('click', () => {
    console.log('Button click')
    document.querySelector('.parent').style = isHidden ? "display:block" : "display:none"
    isHidden = !isHidden
})