import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { actionCreator_data } from '../redux/data'
import { actionCreator_loader } from '../redux/ui/loader'
import Tabletop from 'tabletop'

const contents = [
  { "name": "resume", "title": "이력서" },
  { "name": "portfolio", "title": "포트폴리오" },
  { "name": "narrative", "title": "이야기" },
  { "name": "contacts", "title": "연락처" }
]

const dataKey = {
  info: "1QyN6ObNJWxUukoGc_zy_FkjuWKKE656JW4HGsk1L4Pc",
  resume: "11MxX_AUm6muovkobVb0BhsWlFs5BANi2XNsdITYHvW8",
  skills: "179EZYW-v8GNDRHCfYnLbN_lZSlRebj3kwtmzmBKjmNE",
  portfolio: "1oYPYrTDTU454ywq1qY2cl-VFU4EvTsNgq9GfMYMF2hQ",
  narrative: "1GE9h7z614wH6zjGVhy8oWaHN4-UGkQTCaqDLAVcXJHM"
}



export default function useData() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actionCreator_data.getData.success({ contents: contents }))

    const max = Object.keys(dataKey).length;
    let loaded = 0;
    dispatch(actionCreator_loader.start(max));

    for (let name in dataKey) {
      let key = dataKey[name]
      getData(key, name)
    }

    function getData(key, name) {
      try {
        Tabletop.init({
          key,
          simpleSheet: false,

          callback: data => extractData(data)
        })

        function extractData(data) {
          const dataExtracted = {}
          const keys = Object.keys(data)
          keys.forEach(key => dataExtracted[key] = data[key].elements)

          dispatchData(dataExtracted)
        }

        function dispatchData(dataExtracted) {
          dispatch(actionCreator_data.getData.success({ [name]: dataExtracted }))
          dispatch(actionCreator_loader.setLoaded(++loaded))
        }

      } catch (error) { dispatch(actionCreator_data.getData.failure(error)) }
    }
  }, [dispatch])
}