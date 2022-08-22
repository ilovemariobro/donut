import {forwardRef} from 'react'
import {Box, Center, Heading, Spinner, Button, Container} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

export const ParticleSpin = () => {

}

export const ParticleContainer = forwardRef(({children}, ref) => (
    
        <Box
            ref={ref}
            className="particle"
            m="auto"
            alignItems='center'
            w=0
            h=0
            position="relative"
        >

        </Box>
    
    


))

const Loader = () => {
    return (
        <ParticleContainer>
            <ParticleSpin />
        </ParticleContainer>
    )
}
export default Loader
