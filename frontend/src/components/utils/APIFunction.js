import axios from "axios"


export const api = axios.create({
    baseURL: "http://localhost:8080"
})

export const getHeader = () => {
	const token = localStorage.getItem("token")
	return {
		Authorization: `Bearer ${token}`,
		"Content-Type": "multipart/form-data"
	}
}


// add new room to database
export async function addRoom(photo, roomType, roomPrice) {
    const formData = new FormData()
    formData.append("photo", photo)
    formData.append("roomType", roomType)
    formData.append("roomPrice", roomPrice)

    const response = await api.post("/room/add/new-room", formData, {
		headers: getHeader()
	})

    if (response.status === 201) {
        return true
    }
    else {
        return false
    }
}


export async function getRoomType() {
    try {
        const response = await axios.get("http://localhost:8080/room/room/types")
        return response.data 
    }
    catch (error) {
        throw new Error("Error fetching room types")
    }
}