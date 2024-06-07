import React from 'react';
import BasicLayout from '../components/BasicLayout';
import Contacts from '../components/Contacts';
import { Box, Grid, Typography } from '@mui/material';

export default function QnA() {

    const [showAnswer, setShowAnswer] = React.useState([false, false, false, false]);

    const handleGridClick = (idx) => {
        const arr = [];
        for (let i = 0; i < showAnswer.length; i++) {
            if (i === idx) arr.push(!showAnswer[i]);
            else arr.push(false);
        }
        setShowAnswer(arr);
    };

    return (
        <BasicLayout title={'Q&A'} subTitle={'자주 묻는 질문'}>
            <Box paddingX={{ xs: 3, md: 30 }} paddingY={10} >
                <Typography sx={{ fontFamily: 'KboGothic_B', fontSize: { xs: 40, md: 40 }, marginBottom: '10px' }} variant="h1" textAlign={'center'}>
                    자주 묻는 질문
                </Typography>
                <hr style={{ border: 'none', borderTop: '4px solid #5161b5', marginBottom: '20px', width: 100 }} />
                <Box paddingY={5}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={12} bgcolor={'#efefef'} height={80} sx={
                            {
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                                borderBottomLeftRadius: showAnswer[0] ? 0 : 20,
                                borderBottomRightRadius: showAnswer[0] ? 0 : 20,
                                cursor: 'pointer'
                            }
                        } display="flex" alignItems="center" onClick={() => handleGridClick(0)}>
                            <Typography variant="h2" fontSize={19} fontWeight={'bold'} display={'inline-block'} width={'100%'} paddingX={5}>
                                Q1. 언제부터 효과가 있을까요?
                            </Typography>
                        </Grid>
                        {showAnswer[0] && (
                            <Box bgcolor={'#efefef'} sx={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} color={'#fff'} alignItems="center" width={'100%'}>
                                <Typography variant="p" color={'#333'} fontSize={16} display={'inline-block'} width={'100%'} paddingX={5} paddingY={2}>
                                    효과를 체감할 수 있는 시기는 평균적으로 3개월 전후입니다. 다만, 효과는 선형적으로 증가하지 않습니다.<br />
                                    단 3개의 콘텐츠로 고객반응을 바로 이끌어낸 사례도 있었고, 6개월이 지나도 효과를 못보는 사례도 있습니다.<br />
                                    그러나 3개월 이후에는 효과가 나타나는 경우가 많습니다.
                                </Typography>
                            </Box>
                        )}

                        <Grid item xs={12} md={12} bgcolor={'#efefef'} height={80} sx={
                            {
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                                borderBottomLeftRadius: showAnswer[1] ? 0 : 20,
                                borderBottomRightRadius: showAnswer[1] ? 0 : 20,
                                cursor: 'pointer',
                                marginTop: 1
                            }
                        } display="flex" alignItems="center" onClick={() => handleGridClick(1)}>
                            <Typography variant="h2" fontSize={19} fontWeight={'bold'} display={'inline-block'} width={'100%'} paddingX={5}>
                                Q1. 언제부터 효과가 있을까요?
                            </Typography>
                        </Grid>
                        {showAnswer[1] && (
                            <Box bgcolor={'#efefef'} sx={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} color={'#fff'} alignItems="center" width={'100%'}>
                                <Typography variant="p" color={'#333'} fontSize={16} display={'inline-block'} width={'100%'} paddingX={5} paddingY={2}>
                                    효과를 체감할 수 있는 시기는 평균적으로 3개월 전후입니다. 다만, 효과는 선형적으로 증가하지 않습니다.<br />
                                    단 3개의 콘텐츠로 고객반응을 바로 이끌어낸 사례도 있었고, 6개월이 지나도 효과를 못보는 사례도 있습니다.<br />
                                    그러나 3개월 이후에는 효과가 나타나는 경우가 많습니다.
                                </Typography>
                            </Box>
                        )}
                        <Grid item xs={12} md={12} bgcolor={'#efefef'} height={80} sx={
                            {
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                                borderBottomLeftRadius: showAnswer[2] ? 0 : 20,
                                borderBottomRightRadius: showAnswer[2] ? 0 : 20,
                                cursor: 'pointer',
                                marginTop: 1
                            }
                        } display="flex" alignItems="center" onClick={() => handleGridClick(2)}>
                            <Typography variant="h2" fontSize={19} fontWeight={'bold'} display={'inline-block'} width={'100%'} paddingX={5}>
                                Q1. 언제부터 효과가 있을까요?
                            </Typography>
                        </Grid>
                        {showAnswer[2] && (
                            <Box bgcolor={'#efefef'} sx={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} color={'#fff'} alignItems="center" width={'100%'}>
                                <Typography variant="p" color={'#333'} fontSize={16} display={'inline-block'} width={'100%'} paddingX={5} paddingY={2}>
                                    효과를 체감할 수 있는 시기는 평균적으로 3개월 전후입니다. 다만, 효과는 선형적으로 증가하지 않습니다.<br />
                                    단 3개의 콘텐츠로 고객반응을 바로 이끌어낸 사례도 있었고, 6개월이 지나도 효과를 못보는 사례도 있습니다.<br />
                                    그러나 3개월 이후에는 효과가 나타나는 경우가 많습니다.
                                </Typography>
                            </Box>
                        )}
                        <Grid item xs={12} md={12} bgcolor={'#efefef'} height={80} sx={
                            {
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                                borderBottomLeftRadius: showAnswer[3] ? 0 : 20,
                                borderBottomRightRadius: showAnswer[3] ? 0 : 20,
                                cursor: 'pointer',
                                marginTop: 1
                            }
                        } display="flex" alignItems="center" onClick={() => handleGridClick(3)}>
                            <Typography variant="h2" fontSize={19} fontWeight={'bold'} display={'inline-block'} width={'100%'} paddingX={5}>
                                Q1. 언제부터 효과가 있을까요?
                            </Typography>
                        </Grid>
                        {showAnswer[3] && (
                            <Box bgcolor={'#efefef'} sx={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} color={'#fff'} alignItems="center" width={'100%'}>
                                <Typography variant="p" color={'#333'} fontSize={16} display={'inline-block'} width={'100%'} paddingX={5} paddingY={2}>
                                    효과를 체감할 수 있는 시기는 평균적으로 3개월 전후입니다. 다만, 효과는 선형적으로 증가하지 않습니다.<br />
                                    단 3개의 콘텐츠로 고객반응을 바로 이끌어낸 사례도 있었고, 6개월이 지나도 효과를 못보는 사례도 있습니다.<br />
                                    그러나 3개월 이후에는 효과가 나타나는 경우가 많습니다.
                                </Typography>
                            </Box>
                        )}
                    </Grid>
                </Box>
            </Box>
            <Contacts />
        </BasicLayout>
    );
}