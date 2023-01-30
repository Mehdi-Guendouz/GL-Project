import { createContext, useState } from "react"

const AppContext = createContext({
    id: null,
    wilaya: null,
    activeId: function() {},
    commune: null,
    activeCommune: function() {},
    category: null,
    activeCategory: function() {},
    cours: null,
    activeCours: function() {},
    tarif: null,
    activeTarif: function() {},
    phone: null,
    activePhone: function() {},
    email: null,
    activeEmail: function() {},
    description: null,
    activeDescription: function() {},
    isOnline: null,
    setPlace: function() {},
    loc: null,
    activeLoc: function() {},
})

export function AppContextProvider({ children }) {
    const [id, setId] = useState(null)
    const [wilaya, setWilaya] = useState(null)
    const [commune, setCommune] = useState(null)
    const [category, setCategory] = useState(null)
    const [cours, setCours] = useState(null)
    const [tarif, setTarif] = useState(null)
    const [phone, setPhone] = useState(null)
    const [email, setEmail] = useState(null)
    const [description, setDescription] = useState(null)
    const [isOnline, setIsOnline] = useState(null)
    const [loc, setLoc] = useState(null)

    const activeId = (id, wilayaName) => {
        setId(id)
        setWilaya(wilayaName)
    }

    const activeCommune = (communeName) => {
        setCommune(communeName)
    }

    const activeCategory = (category) => {
        setCategory(category)
    }

    const activeCours = (cours) => {
        setCours(cours)
    }

    const activeTarif = (tarif) => {
        setTarif(tarif)
    }

    const activePhone = (phone) => {
        setPhone(phone)
    }

    const activeEmail = (email) => {
        setEmail(email)
    }

    const activeDescription = (desc) => {
        setDescription(desc)
    }

    const setPlace = (val) => {
        setIsOnline(val)
    }

    const activeLoc = (loc) => {
        setLoc(loc)
    }

    const context = {
        id,
        wilaya,
        commune,
        category,
        cours,
        tarif,
        phone,
        email,
        description,
        isOnline,
        loc,
        activeId,
        activeCommune,
        activeCategory,
        activeCours,
        activeTarif,
        activePhone,
        activeEmail,
        activeDescription,
        setPlace,
        activeLoc,
    }

    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext