import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { StarBox } from "./star.styles";


type StarProp = {
    rate: number;
}

const Star: React.FC<StarProp> = ({ rate }) => {

    const totalRate = Math.round(rate);

    switch(totalRate)  {
        case 1:
            return (
                <StarBox>
                    <AiFillStar color="orange" fontSize={20} />
                    <AiOutlineStar fontSize={20} />
                    <AiOutlineStar fontSize={20} />
                    <AiOutlineStar fontSize={20} />
                    <AiOutlineStar fontSize={20} />
                </StarBox>
            )
        case 2: 
            return (
                <StarBox>
                    <AiFillStar color="orange" fontSize={20} />
                    <AiFillStar color="orange" fontSize={20} />
                    <AiOutlineStar fontSize={20} />
                    <AiOutlineStar fontSize={20} />
                    <AiOutlineStar fontSize={20} />
                </StarBox>
            )
        case 3: 
            return (
                <StarBox>
                    <AiFillStar color="orange" fontSize={20} />
                    <AiFillStar color="orange" fontSize={20} />
                    <AiFillStar color="orange" fontSize={20} />
                    <AiOutlineStar fontSize={20} />
                    <AiOutlineStar fontSize={20} />
                </StarBox>
            )
        case 4: 
            return (
                <StarBox>
                    <AiFillStar color="orange" fontSize={20} />
                    <AiFillStar color="orange" fontSize={20} />
                    <AiFillStar color="orange" fontSize={20} />
                    <AiFillStar color="orange" fontSize={20} />
                    <AiOutlineStar fontSize={20} />
                </StarBox>
            )
        case 5: 
            return (
                <StarBox>
                    <AiFillStar color="orange" fontSize={20} />
                    <AiFillStar color="orange" fontSize={20} />
                    <AiFillStar color="orange" fontSize={20} />
                    <AiFillStar color="orange" fontSize={20} />
                    <AiFillStar color="orange" fontSize={20} />
                </StarBox>
            )

        default :
                return (
                    <StarBox>
                        <AiOutlineStar fontSize={20} />
                        <AiOutlineStar fontSize={20} />
                        <AiOutlineStar fontSize={20} />
                        <AiOutlineStar fontSize={20} />
                        <AiOutlineStar fontSize={20} />
                    </StarBox>
                )
    }
}

export default Star;