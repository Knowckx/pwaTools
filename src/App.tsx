import { useEffect } from 'react'
import PriceCalculator from './comp/PriceCalculator';


/** 打印出屏幕的尺寸分辨率信息 */
export function LogoutDeviceSize() {
    const sc = window.screen
    console.log("width * height:", sc.width, sc.height);
    console.log("avail width * height:", sc.availWidth, sc.availHeight);
    console.log("pixelDepth:", sc.pixelDepth, "devicePixelRatio", window.devicePixelRatio);
}

export function ResizeInPC() {
    console.log(`userAgent is `, navigator.userAgent)
    if (!/Mobi|Android/i.test(navigator.userAgent)) {
        LogoutDeviceSize()

        const sizeRate = [9, 19.5] // APP的窗口比例 宽是9 高是19.5
        const AppHeight = 1280 // 你希望APP在PC上 最后显示的高度

        // 计算出1080对应的宽度
        const AppWidth = AppHeight * sizeRate[0] / sizeRate[1]
        console.log(`we want size is `, AppWidth, AppHeight)

        const useRatio = 1.5  // 窗口缩放的比例是1.5

        // 根据缩放比例调整目标大小  缩放是1.5时 你resize填500 实际给你750
        const scaledTargetWidth = AppWidth / useRatio;
        const scaledTargetHeight = AppHeight / useRatio;
        console.log(`resizeTo is `, scaledTargetWidth, scaledTargetHeight)
        window.resizeTo(scaledTargetWidth, scaledTargetHeight);
        return
    }
}

function App() {
    useEffect(() => {
        ResizeInPC()
    }, []);
    return (
        <>
            <PriceCalculator />
        </>
    )
}

export default App
