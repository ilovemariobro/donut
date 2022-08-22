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
            mt={['-200px', '-160px', '-420px']}
            mb={['-300px', '-200px', '-200px']}
            w={[280, 480, 640]}
            h={[280, 480, 640]}
            position="relative"
        >
            
            <br></br>

            {children}

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
