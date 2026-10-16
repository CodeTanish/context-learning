import React from "react"

export default function Data() {

    React.useEffect(() => {}, [])

    async function fetchUserData(){
        const user = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await user.json()

        console.log(data)
    }

    fetchUserData()
  return (
    <>
      <p>{name}</p>
    </>
  );
}
