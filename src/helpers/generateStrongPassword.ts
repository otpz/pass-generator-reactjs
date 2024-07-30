
export const generateStrongPassword = (length: number, uppercase: boolean, lowercase: boolean, numbers: boolean ): string => {

    const upperChars: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowerChars: string = "abcdefghijklmnopqrstuvwxyz"
    const numberChars: string = "0123456789"
    
    let allChars: string = ""

    if (uppercase){
        allChars += upperChars
    }

    if (lowercase){
        allChars += lowerChars
    }

    if (numbers){
        allChars += numberChars
    }

    if (allChars === ""){
        throw new Error("Büyük harf veya küçük harf butonlardan en az biri açık olmalıdır!")
    }   

    let password: string = ""

    for (let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allChars.length)
        password += allChars[randomIndex]
    }

    return password
}