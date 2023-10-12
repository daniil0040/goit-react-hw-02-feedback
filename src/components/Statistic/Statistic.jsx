import { StatisticItem } from "./Statistic.styled"

export const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
    const totalValue = total()
    return (
        <div>
            <ul>
                <StatisticItem>Good: { good}</StatisticItem>
                <StatisticItem>Neutral: { neutral}</StatisticItem>
                <StatisticItem>Bad: {bad }</StatisticItem>
                <StatisticItem>Total: {totalValue}</StatisticItem>
                <StatisticItem>Positive Feedback: {totalValue > 0 ? positivePercentage(totalValue) : 0}%</StatisticItem>
            </ul>
        </div>
    )
}