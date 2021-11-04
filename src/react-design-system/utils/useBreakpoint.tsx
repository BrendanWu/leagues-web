import React from 'react';


const useBreakpoint = () => {

    const [breakpoint, setBreakpoint] = React.useState<string>('md')
    const [size, setSize]=React.useState<number>(window.innerWidth);
    const handleResize = () => {
        setSize(window.innerWidth)
        const bp: string = calculateBreakpoint(window.innerWidth)
        setBreakpoint(bp);
    }
    const calculateBreakpoint = (innerWidth: number) => {
  
        if(innerWidth < 480) {
            return 'xs'
        }
        if(innerWidth < 768) {
            return 'sm'
        }
        if(innerWidth < 992) {
            return 'md'
        }
        if(innerWidth < 1200) {
            return 'lg'
        }
        return 'xs'
    }
    React.useEffect(()=>{
        const innerWidth = window.innerWidth
        window.addEventListener("resize", handleResize);
     
        setBreakpoint(calculateBreakpoint(innerWidth));
    
    }, [size])
    return breakpoint;
}
export default useBreakpoint;