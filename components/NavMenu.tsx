import { styled } from "@stitches/react"
import { useState } from "react"

const Layer = styled('div', {
        display: "block",
        content: "",
        backgroundColor: 'black',
        width: "100%",
        height: '3px',
        variants: {
            isOpen: {
                true: {
                    backgroundColor: "CornflowerBlue"
                }
            }
        }
            
})

const TopBun = styled(Layer, {
    
})

const Filling = styled(Layer, {

})

const BottomBun = styled(Layer, {

})

const Burger = styled('div', {
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "space-between",
    width: "22px",
    height: '16px',
    cursor: "pointer",
    "@media screen and (min-width: 768px)": {
        display: "none",
    }
})

export default function NavMenu() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Burger onClick={() => setIsOpen((val) => !val)}>
            <TopBun isOpen={isOpen}></TopBun>
            <Filling isOpen={isOpen}></Filling>
            <BottomBun isOpen={isOpen}></BottomBun>
        </Burger>
    )
}
