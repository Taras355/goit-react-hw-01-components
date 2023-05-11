import PropTypes from "prop-types";
import {
    StatisticsMenu,
    Title,
    StatList,
    StatItem,
    Percentage,
    Label
} from "./Statistics.styled";

export const Statistics = ({ title, stats }) => {
    return (
        <StatisticsMenu amount={stats.length}>
            {title && <Title>Upload stats</Title>}

            <StatList>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <StatItem key={id}>
                            <Label>{label}</Label>
                            <Percentage>{percentage}%</Percentage>
                        </StatItem>
                    );
                })}
            </StatList>
        </StatisticsMenu>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    ).isRequired
};
