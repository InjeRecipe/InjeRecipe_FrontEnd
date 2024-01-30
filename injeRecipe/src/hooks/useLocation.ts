import Geolocation from '@react-native-community/geolocation';
export const useLocation=() => {
    const getNowLocation = ()=> {
        Geolocation.getCurrentPosition(data => {
            console.log(data)
            return data
        }
        )
    }

    return{
        getNowLocation,
    }
} 