import { useState } from "react"
import { useParams } from "react-router-dom"
import type { IThumbnail } from "../assets/assets"
import SoftBackdrop from "../components/SoftBackdrop"

// 1:03
const Generate = () => {
    const {id} = useParams()
    const [title,setTitle] = useState('')
    const [additionalDetails,setAdditionalDetails] = useState('')
    const [thubnail,setThubnail] = useState<IThumbnail | null>(null)
    const [loading,setLoading] = useState(false)
    return (
    <>
        <SoftBackdrop/>
        <div className="pt-24 min-h-screen">
            <main>

            </main>
        </div>
    </>
  )
}

export default Generate