import { SectionEl } from "./Section.styled"

export const Section = ({title,children}) => {
    return <SectionEl>
        <h1>{title}</h1>
        {children}
    </SectionEl>
}