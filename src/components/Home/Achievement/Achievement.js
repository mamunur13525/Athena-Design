import React from 'react';
import logo1 from "../../../Illustration/happy@2x.png";
import logo2 from "../../../Illustration/marketing@2x.png";
import logo3 from "../../../Illustration/surface1@2x.png";
import logo4 from "../../../Illustration/transportation@2x.png";
import AchievementCard from './AchievementCard/AchievementCard';

const Achievement = () => {
    const achievementData = [
        {
            id: 1,
            logo: logo1,
            value: 700,
            title: "Happy Clients"
        },
        {
            id: 2,
            logo: logo2,
            value: 140,
            title: "Project Completed"
        },
        {
            id: 3,
            logo: logo3,
            value: 25,
            title: "Crazy Minds"
        },
        {
            id: 4,
            logo: logo4,
            value: 75,
            title: "Running Projects"
        }
    ]

    return (
        <section className="container mt-5">
            <div className="row">
                <div className="col-md-5">
                    <h2>Our Achievements</h2>
                    <p>
                        It is a long established fact that a reader will be distracted by 
                        the readable content of a page when looking at its layout. The
                        point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letter.
                    </p>
                </div>
                <div className="col-md-7 row">
{
    achievementData.map(data => <AchievementCard key={data.id} data={data} />)
}
                </div>
            </div>
        </section>
    );
};

export default Achievement;