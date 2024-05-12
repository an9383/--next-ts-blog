import { db } from '@/firebase/firebase'
import { collection, addDoc, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore'

// Firestore 컬렉션 이름을 명확히 정의해두는 것이 좋습니다.
const COLLECTION_NAME = 'data'

// 데이터 추가 함수
export const addData = async (data: any) => {
    try {
        const docRef = await addDoc(collection(db, COLLECTION_NAME), data)
        console.log('Document written with ID: ', docRef.id)
    } catch (e) {
        console.error('Error adding document: ', e)
    }
}

// 데이터 조회 함수
export const getData = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, COLLECTION_NAME))
        const results = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }))
        return results
    } catch (e) {
        console.error('Error getting documents: ', e)
        return []
    }
}

// 데이터 수정 함수
export const updateData = async (id: string, data: any) => {
    try {
        await setDoc(doc(db, COLLECTION_NAME, id), data)
        console.log('Document updated with ID: ', id)
    } catch (e) {
        console.error('Error updating document: ', e)
    }
}

// 데이터 삭제 함수
export const deleteData = async (id: string) => {
    try {
        await deleteDoc(doc(db, COLLECTION_NAME, id))
        console.log('Document deleted with ID: ', id)
    } catch (e) {
        console.error('Error deleting document: ', e)
    }
}