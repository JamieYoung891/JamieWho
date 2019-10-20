import { useState, useEffect } from 'react'
import Tabletop from 'tabletop'
import map from './map'


export const useData = () => {

  const [data, setData] = useState(false);

  const [loadDataNum, setLoadDataNum] = useState(0);
  const [loadedDataNum, setLoadedDataNum] = useState(0);



  useEffect(() => {
    const { contents, componentData, layout, dataKey } = map
    const dataNum = Object.keys(dataKey).length; setLoadDataNum(dataNum)



    let __data = { contents, componentData, layout }

    let loaded = 0;
    const dataInsertor = (name, data) => {
      let container = {}, keys = Object.keys(data);

      keys.forEach(key => container[key] = data[key].elements)
      __data[name] = container;
      setLoadedDataNum(++loaded);
    }

    for (let name in dataKey) {
      let key = dataKey[name]

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