import { BtnList,BtnListItem } from "./FeedbackOptions.stiled"

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
    return <BtnList>
            {options.map((key) => {
                return <li key={options.indexOf(key)}>
                    <BtnListItem name={`${key}`} type="button" onClick={()=>{onLeaveFeedback(`${key}`)}}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                    </BtnListItem>
                </li>
            })}
        </BtnList>
}