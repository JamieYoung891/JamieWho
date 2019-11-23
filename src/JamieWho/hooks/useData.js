import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { DATA_ACTION } from '../redux/data'
import { actionCreator_loader } from '../redux/ui/loader'
import Tabletop from 'tabletop'
import map from './map'


export default function useData() {
  const dispatch = useDispatch()

  const [data, setData] = useState(false);

  const [loadDataNum, setLoadDataNum] = useState(0);
  const [loadedDataNum, setLoadedDataNum] = useState(0);

  useEffect(() => {
    const { contents, componentData, layout, dataKey } = map
    const dataNum = Object.keys(dataKey).length; setLoadDataNum(dataNum);
    dispatch(actionCreator_loader.set.max(dataNum));



    let __data = { contents, componentData, layout }

    dispatch({
      type: DATA_ACTION.GET_DATA.SUCCESS,
      payload: __data
    })

    let loaded = 0;


    const getData = (key, name) => {

      const dataExtractor = data => {
        let dataExtracted = {}, keys = Object.keys(data);

        keys.forEach(key => dataExtracted[key] = data[key].elements)

        dispatch({
          type: DATA_ACTION.GET_DATA.SUCCESS,
          payload: { [name]: dataExtracted }
        })
      }

      return Tabletop.init({
        key,
        simpleSheet: false,
        callback: data => dataExtractor(data)
      })
    }

    const dataInsertor = (name, data) => {
      let container = {}, keys = Object.keys(data);

      keys.forEach(key => container[key] = data[key].elements)
      __data[name] = container;
      setLoadedDataNum(++loaded);
      dispatch(actionCreator_loader.set.loaded(loaded))
    }

    for (let name in dataKey) {
      let key = dataKey[name]
      getData(key, name)
      Tabletop.init({
        key: key, simpleSheet: false,
        callback: (data) => { dataInsertor(name, data) }
      })
    }

    setData(__data)
  }, [])

  return {
    data: data,
    loadInfo: {
      loadDataNum: loadDataNum,
      loadedDataNum: loadedDataNum,
      isDataReady: loadDataNum && loadDataNum === loadedDataNum
    }
  }
}