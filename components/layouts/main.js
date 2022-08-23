import Head from 'next/head'
import dynamic from 'next/dynamic'
import {Box, Container} from '@chakra-ui/react'

const Main = ({children, router}) => {
    return (
        <Box as="main">

            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title> donut </title>
            </Head>
            
            <Container maxW="container.md">
                {children}
            </Container>

        </Box>
    )
}
export default Main 
