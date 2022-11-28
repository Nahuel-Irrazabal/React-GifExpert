import { render } from "@testing-library/react"
import { GifCard } from "../../src/Components/GiftCard"

describe('Test GiftCard', () => {

    const title = 'Title Card'
    const url = 'url Card'

    test('debe de hacer match con el snapshot', () => {
        const { container } = render( <GifCard title={title} url={url} /> )
        expect( container ).toMatchSnapshot()
    })

})