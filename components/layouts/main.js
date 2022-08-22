import Head from 'next/head'
import dynamic from 'next/dynamic'
import {Box, Container} from '@chakra-ui/react'

const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>

            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title> aryankumar.io </title>
            </Head>
            
            <Container maxW="container.md" pt={14}>
                {children}
            </Container>

        </Box>
    )
}
export default Main 
