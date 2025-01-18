import axios from "axios"
 const suscribe = async (email) => {
    try {
        const emailPosted = await axios.post("http://localhost:8080/api/v1/suscribers",{
            "email":email
        })
        return 'suscribed successfully'
    } catch (error) {
        console.log(error);
        return 'suscription failed'
    }
}
export default suscribe;