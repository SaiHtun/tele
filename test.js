
const cars = ['bmw', 'honda', 'toyota', 'honda', 'mercedez', 'mazda'];

const async = () => {
  let array = ['bmw', 'honda', 'toyota', 'honda', 'mercedez', 'mazda'];
  for(let i = array.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * i)
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  console.log(array);
}

async();