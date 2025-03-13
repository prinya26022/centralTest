import { Box, Button, Input, styled, Typography } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const StyledTypography = styled(Typography)(({ theme }) => ({
    fontSize: '24px',
}))


const DetailScreen = () => {
    const [comment, setComment] = useState('')
    const [answerList, setAnswerList] = useState([{
        key: '1',
        author: 'name surname',
        message: 'test a 12345'
    }, {
        key: '2',
        author: 'name surname',
        message: 'test a 12345'
    }])

    const location = useLocation();
    const { key, title, desc } = location.state;

    const handleComment = () => {
        const newComment = {
            key: `${answerList.length + 1}`,
            author: 'test newUser',
            message: comment
        }
        setAnswerList([...answerList, newComment])
    }

    return <Box sx={{ padding: '24px', display: 'flex', justifyContent: 'center', paddingX: '300px', gap: '24px', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', paddingBottom: '24px', borderBottom: '1px solid #302f2d' }}>
            <StyledTypography>{title}</StyledTypography>
        </div>
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'flex-start' }}>
            <Typography style={{ textAlign: 'left' }}>{desc}</Typography>
        </div>

        <div>
            <Typography align="left">{answerList.length} Answer(s)
            </Typography>
            {answerList.map((answer) => <div key={answer.key} style={{ display: 'flex', flexDirection: 'column', padding: '6px 12px' }}>
                <div style={{ backgroundColor: '#bdbdbd', padding: '8px 12px', borderRadius: 8 }}>
                    <Typography align="left">
                        {answer.message}
                    </Typography>
                </div>
                <div style={{ width: '100%', justifySelf: 'right' }}>
                    <div style={{ justifySelf: 'flex-end' }}>
                        <Typography align="left">
                            {answer.author}
                        </Typography>
                    </div>

                </div>
            </div>)}
        </div>

        <div style={{ width: '100%' }}>
            <Typography align="left">Your Answer</Typography>
            <Input style={{ border: '1px solid #BDB395', width: '100%', borderRadius: '8px', padding: '8px', }} onChange={(e) => setComment(e.target.value)} />
            <Button onClick={handleComment}>Post Your Answer</Button>
        </div>
    </Box>
};
export default DetailScreen