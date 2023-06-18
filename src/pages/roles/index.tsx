import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Box } from "@chakra-ui/react";
import { AppPage } from "../../components/app-page";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <AppPage>
            <Box>Roles Page</Box>
        </AppPage>
    )
}

export default IndexPage;

export const Head: HeadFC = () => <title>Roles</title>