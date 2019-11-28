import { useState, useEffect } from 'react';
import NetInfo from "@react-native-community/netinfo";

function useInternet() {
  const [netInfo, setNetInfo] = useState(false)

  const onChange = newState => {
    setNetInfo(newState)
  }

  useEffect(() => {
    NetInfo.isConnected.fetch().then((connectionInfo) => {

      setNetInfo(connectionInfo)
    })

    NetInfo.isConnected.addEventListener('connectionChange', onChange)

    return () => {
      NetInfo.isConnected.removeEventListener('connectionChange', onChange)
    }
  }, [])

  return netInfo
}

export default useInternet;