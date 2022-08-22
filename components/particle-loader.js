import {forwardRef} from 'react'
import {Box, Center, Heading, Spinner, Button, Container} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

export const ParticleSpin = () => {

}

export const ParticleContainer = forwardRef(({children}, ref) => (



))

const Loader = () => {
    return (
        <ParticleContainer>
            <ParticleSpin />
        </ParticleContainer>
    )
}
export default Loader
