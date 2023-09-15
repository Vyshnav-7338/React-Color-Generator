import React, { useState } from 'react'
import SingleColor from './SingleColor/SingleColor'
import Values from 'values.js'
function Home() {
    const [list, setList] = useState(new Values('#f15025').all(10))
    const [color, setColor] = useState('')
    const [error, setError] = useState(false)

    //New Click Function
    const handSubmit = (e) => {
        e.preventDefault()
        try {
            let colors = new Values(color).all(10)
            setList(colors)

        }
        catch {
            setError(true)
            console.log(error)
        }
    }
    return (
        <>
            <section className='container'>
                <h3>Color Generator</h3>
                <form onSubmit={handSubmit}>
                    <input type="text" onChange={(e) => setColor(e.target.value)} placeholder='#f15025' className={`${error ? 'error' : null}`} />
                    <button className='btn' type='submit'>Submit</button>
                </form>
            </section >
            <section className='colors'>
                {list.map((color, index) => {

                    return <SingleColor key={index}
                        {...color}
                        index={index}
                        hexColor={color.hex} />
                })}

            </section>
        </>
    )
}

export default Home
