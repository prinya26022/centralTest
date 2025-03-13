import { Box, Button, Dialog, DialogContent, DialogContentText, DialogTitle, Input, styled, TextareaAutosize, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export interface QuestionType {
    key: string;
    title: string;
    desc: string;
}

const StyledTypography = styled(Typography)(({ theme }) => ({
    fontSize: '24px',
    color: '#90c4f9',
    cursor: 'pointer',
    ':hover': {
        opacity: 0.9
    }
}))

const HomeScreen = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [questionList, setQuestList] = useState([{
        key: '1',
        title: 'Raylib Input Issue',
        desc: 'I am trying to make a platformer game, but there is problem in dash.when I hit a+w then e I dashed in top left (intended behaviour) , when I hit d+w then e nothing happen In order to dash top right I'
    }, {
        key: '2',
        title: 'Raylib Input Issue',
        desc: 'I am trying to make a platformer game, but there is problem in dash.when I hit a+w then e I dashed in top left (intended behaviour) , when I hit d+w then e nothing happen In order to dash top right I'
    }, {
        key: '3',
        title: 'Raylib Input Issue',
        desc: 'I am trying to make a platformer game, but there is problem in dash.when I hit a+w then e I dashed in top left (intended behaviour) , when I hit d+w then e nothing happen In order to dash top right I'
    }])

    const navigate = useNavigate()
    const [topic, setTopic] = useState('')
    const [desc, setDesc] = useState('')


    const handleOpenDialog = () => {
        setIsOpen(true)
    }

    const handleCreateQuestion = () => {
        const keyIndex = questionList.length + 1
        const newQuestion = {
            key: `${keyIndex}`,
            title: topic,
            desc: desc
        }
        questionList.push(newQuestion)
        setTopic('')
        setDesc('')
        setIsOpen(false)
    }

    const handleNavigateDetail = (question: QuestionType) => {
        navigate('detail', { state: question })
    }


    return <div style={{ width: '100%', height: '100%', padding: '24px' }}>
        <div>nav</div>
        <div>
            <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'space-between' }}>
                <Typography>Questions</Typography>
                <div>
                    <Button onClick={handleOpenDialog}>add Question</Button>
                </div>
            </div>
            <div style={{ width: '100%', height: '100%', padding: '12px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {questionList.map((question) =>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <StyledTypography onClick={() => {
                            handleNavigateDetail(question)
                        }} >{question.title}
                        </StyledTypography>
                        <Typography style={{ fontSize: '16px' }}>{question.desc}</Typography>
                    </div>)}

            </div>
        </div>
        <Dialog open={isOpen} style={{ width: '100%', height: '100%' }}>
            <div>
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        You’re ready to ask a programming-related question and this form will help guide you through the process.
                        Looking to ask a non-programming question? See the topics here to find a relevant site.
                    </DialogContentText>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <Box>
                            <Typography>Topic</Typography>
                            <Input sx={{ width: '100%' }} onChange={(e) => setTopic(e.target.value)} />
                        </Box>
                        <Box>
                            <Typography>Detail</Typography>
                            <Input style={{ border: '1px solid #BDB395', width: '100%', borderRadius: '8px', padding: '8px', }}
                                onChange={(e) => setDesc(e.target.value)}
                            />
                        </Box>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <Button onClick={handleCreateQuestion}>Create</Button>
                        </div>

                    </div>

                </DialogContent>

            </div>
        </Dialog>

        <div>footer</div>
    </div>;
};

export default HomeScreen;
