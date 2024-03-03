// ScrollToTopButton.js
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 150) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <ScrollToTopButton onClick={scrollToTop} style={{ display: isVisible ? 'block' : 'none' }}>
            <ArrowUpwardIcon />
        </ScrollToTopButton>
    );
};

export default ScrollToTop;

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: none;
  padding: 10px;
  background-color: rgb(30, 42, 168);
  color: #fff;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
