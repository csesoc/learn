import Link from "next/link"
import { ArrowLeft } from "phosphor-react"
import { Button } from "./Button"

export const BackButton = (props) => {
    return (
        <Link href={`${props.path}`}>
            <Button
                size="default"
                css={{
                    width: 'fit-content',
                    marginTop: '$4',
                    cursor: 'pointer',
                    backgroundColor: '$blue9',
                    color: 'white',
                    '&:hover': { backgroundColor: '$blue10' }
                }}>
                <ArrowLeft weight="bold" />
                Back to home
            </Button>
        </Link>)
}

