import foods from './foods'
import {choice, remove} from './helpers'

const orderFood = (foods) => {
  const food = choice(foods)
  console.log(`I'd like one ${food}, please`)
  console.log(`Here you go: ${food}`)
  console.log('Delicious! May I have another?')
  remove(foods, food)
  console.log(`I'm sorry, we're all out. We only have ${foods.length} other foods left`)
}

orderFood(foods)