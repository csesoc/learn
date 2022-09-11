import { Flex } from 'components/Flex'
import NextArticleButton from 'components/NextArticleButton'
import { styled } from '../stitches.config'


const ContainerRow = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '6rem',

})

const ArticleButtonContainer = (props) => {

    let prevName = props.prevName;
    let nextName = props.nextName;


    if (props.prevName && props.prevName.length >= 62) {
        prevName = String(props.prevName);
        prevName = prevName.slice(0, 62);
        prevName += "...";
    };

    if (props.nextName && props.nextName.length >= 62) {
        nextName = String(props.nextName)
        nextName = nextName.slice(0, 62);
        nextName += "...";
    };

    let start = false;

    if (nextName && (!prevName)) {
        start = true;
    }


    const prevLink = props.prev;
    const nextLink = props.next;


    const pos = (!prevName && nextName) ? "flex-end" : "auto";



    return (

        <ContainerRow css={{ justifyContent: pos }}>


            {props.prev &&

                <NextArticleButton type="prev" link={prevLink} start={start}>

                    {prevName}


                </NextArticleButton>
            }

            {props.next &&

                <NextArticleButton type="next" link={nextLink} start={start}>

                    {nextName}

                </NextArticleButton>
            }

        </ContainerRow >

    )
}

export default ArticleButtonContainer


