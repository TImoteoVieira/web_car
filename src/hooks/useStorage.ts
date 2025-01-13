import AsyncStorage from "@react-native-async-storage/async-storage";
import { CarsProps } from '../types/cars.type'

const key = "@webcars";

const useStorage = () => {

  const getItem = async (): Promise<CarsProps[]> => {
    try{
      const cars = await AsyncStorage.getItem(key)
      return cars && JSON.parse(cars) || [];
    }catch(err){
      console.log(err);
      return []
    }
  }

  const saveItem = async (newCar: CarsProps) => {
    try{
      let cars = await getItem();

      let findCar = cars.find( car => car.id === newCar.id)

      if(findCar){
        return;
      }

      cars.push(newCar);

      await AsyncStorage.setItem(key, JSON.stringify(cars))
      console.log("CARRO FAVORITADO COM SUCESSO!")

    }catch(err){
      console.log("ERRO AO SALVAR ", err)
    }
  }

  const removeItem = async (id: string): Promise<CarsProps[] | []> => {
    try{
      let cars = await getItem();

      let updatedCarList = cars.filter( car => {
        return (car.id !== id)
      })

      await AsyncStorage.setItem(key, JSON.stringify(updatedCarList))

      return updatedCarList

    }catch(err){
      console.log("ERRO AO REMOVER ", err)
      return [];
    }
  }

  return {
    getItem,
    saveItem,
    removeItem,
  }
}

export default useStorage;