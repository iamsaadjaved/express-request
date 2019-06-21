const addTwoNum = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
};

const sum = async () => {
    const result1 = await addTwoNum(2,6)
    const result2 = await addTwoNum(result1 , 5)
    const result3 = await addTwoNum(result2 , 7)
    return result3
    
}

sum().then(data => console.log(data))



// const updateAndCount = async (id, criteria) => {
//   try {
//     const res = await Profiles.findByIdAndUpdate(id, criteria);
//     if (!res) {
//       throw Error("user does not found");
//     }
//     const count = await Profiles.countDocuments(criteria);
//     console.log(count);
//   } catch (e) {
//     console.log(e, "error in data");
//   }
// };

// updateAndCount("5d065fcdd88c6f148c86578b", { graduate: false });

// Profiles.findByIdAndUpdate('5d065fcdd88c6f148c86578b',{
//     graduate: false
// })
// .then(res => {
//     console.log(res)
//     return Profiles.countDocuments({
//         graduate : true
//     })
// })
// .then(c => console.log(c))
// .catch(e => console.log(e))

// const newRecord = Profiles({
//     name: 'saad javed',
//     age: 30,
//     // graduate: false,
//     email: 'saad.amjad@gmail.com'
// })

// newRecord.save()
// .then(data => console.log(data))
// .catch(err => console.log(err))
