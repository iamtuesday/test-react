import { Button } from "../atoms/Button"
import { Box } from "../molecules"

export const Types = () => {
    return (
        <div>
            <Box backgroundColor="red">This is the box children</Box>
            <Button type="button" styles={{ backgroundColor: "black" }}>This i a button</Button>
        </div>
    )
}
