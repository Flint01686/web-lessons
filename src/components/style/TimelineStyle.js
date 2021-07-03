import styled from 'styled-components'

export const TimelineStyle = styled.div`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font: normal 16px/1.5 "Helvetica Neue", sans-serif;
        background: turquoise;
        color: #fff;
        overflow-x: hidden;
        padding-bottom: 50px;
    }


    /* INTRO SECTION
    –––––––––––––––––––––––––––––––––––––––––––––––––– */

    .intro {
        background: black;
        padding: 100px 0;
    }

    .container {
        width: 90%;
        max-width: 1200px;
        margin: 0 auto;
        text-align: center;
    }

    .main {
        font-size: 2.5rem;
        color: white;
    }


    /* TIMELINE
    –––––––––––––––––––––––––––––––––––––––––––––––––– */

    .timeline ul {
        background: turquoise;
        padding: 50px 0;
    }

    .timeline ul li {
        list-style-type: none;
        position: relative;
        width: 6px;
        margin: 0 auto;
        padding-top: 50px;
        background: #fff;
    }

    .timeline ul li::after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: inherit;
        z-index: 1;
    }

    .timeline ul li div {
        position: relative;
        bottom: 0;
        width: 400px;
        padding: 15px;
        background: black;
    }

    .timeline ul li div::before {
        content: "";
        position: absolute;
        bottom: 7px;
        width: 0;
        height: 0;
        border-style: solid;
    }

    .timeline ul li:nth-child(odd) div {
        left: 45px;
    }

    .timeline ul li:nth-child(odd) div::before {
        left: -15px;
        border-width: 8px 16px 8px 0;
        border-color: transparent black transparent transparent;
    }

    .timeline ul li:nth-child(even) div {
        left: -439px;
    }

    .timeline ul li:nth-child(even) div::before {
        right: -15px;
        border-width: 8px 0 8px 16px;
        border-color: transparent transparent transparent black;
    }

    time {
        display: block;
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: 8px;
    }


    /* EFFECTS
    –––––––––––––––––––––––––––––––––––––––––––––––––– */

    .timeline ul li::after {
      transition: background 0.5s ease-in-out;
    }

    .timeline ul li.in-view::after {
       background: black;
    }

    .timeline ul li div {
        visibility: hidden;
        opacity: 0;
        transition: all 0.5s ease-in-out;
    }

    .timeline ul li:nth-child(odd) div {
        transform: translate3d(200px, 0, 0);
    }

    .timeline ul li:nth-child(even) div {
        transform: translate3d(-200px, 0, 0);
    }

    .timeline ul li.in-view div {
        transform: none;
        visibility: visible;
        opacity: 1;
    }



    /* GENERAL MEDIA QUERIES
    –––––––––––––––––––––––––––––––––––––––––––––––––– */

    @media screen and (max-width: 900px) {
        .timeline ul li div {
            width: 250px;
        }
        .timeline ul li:nth-child(even) div {
            left: -289px;
            /*250+45-6*/
        }
    }

    @media screen and (max-width: 600px) {
        .timeline ul li {
            margin-left: 20px;
        }
        .timeline ul li div {
            width: calc(100vw - 91px);
        }
        .timeline ul li:nth-child(even) div {
            left: 45px;
        }
        .timeline ul li:nth-child(even) div::before {
            left: -15px;
            border-width: 8px 16px 8px 0;
            border-color: transparent black transparent transparent;
        }
    }


    /* EXTRA/CLIP PATH STYLES
    –––––––––––––––––––––––––––––––––––––––––––––––––– */
        .timeline-clippy ul li::after {
        width: 40px;
        height: 40px;
        border-radius: 0;
    }

    .timeline-rhombus ul li::after {
        clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    }

    .timeline-rhombus ul li div::before {
        bottom: 12px;
    }

    .timeline-star ul li::after {
        clip-path: polygon(
            50% 0%,
            61% 35%,
            98% 35%,
            68% 57%,
            79% 91%,
            50% 70%,
            21% 91%,
            32% 57%,
            2% 35%,
            39% 35%
        );
    }

    .timeline-heptagon ul li::after {
        clip-path: polygon(
            50% 0%,
            90% 20%,
            100% 60%,
            75% 100%,
            25% 100%,
            0% 60%,
            10% 20%
        );
    }

    .timeline-infinite ul li::after {
        animation: scaleAnimation 2s infinite;
    }

    @keyframes scaleAnimation {
        0% {
            transform: translateX(-50%) scale(1);
        }
        50% {
            transform: translateX(-50%) scale(1.25);
        }
        100% {
            transform: translateX(-50%) scale(1);
        }
    }
`