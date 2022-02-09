import { Box, Container, Typography } from "@mui/material";
import "./FeatureSummery.css";

export const FeatureSummery = () => {
  return (
    <section className="summery">
      <Container>
        <Box className="contentWrapper">
          <Typography variant="h2">Summary</Typography>
          <Typography component="p">
            The Dapper Labs team is one of the most successful dApps teams in
            the crypto space. Their trading collectibles game CryptoKitties has
            sold $28M+ and bred 1.6M+ kitties. Dapper created Cheeze Wizards and
            iridescence, the world's first digital clothing on the blockchain.
            Next, Dapper is rolling out NBA Top Shot and Flow, the blockchain
            for open worlds. Today, Dapper Labs relies on Alchemy to serve the
            most reliable and consistent view of the blockchain.
          </Typography>
          <div className="dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
          <Typography variant="h2">
            With other solutions, Dapper encountered outages, congestion and
            nonce management issues
          </Typography>
          <Typography component="p">
            Before partnering with Alchemy, Dapper Lab devs tried other
            infrastructure solutions, including running their own nodes. With
            other external providers, Dapper experienced congestion on the
            entire network. The performance was unstable, with hours of full
            outages or being out of sync. Nonce services were poor to the point
            that Dapper stopped grabbing pending nonce entirely, instead storing
            nonce themselves.
          </Typography>
          <Typography component="p">
            Performance was so poor that Dapper took matters into their own
            hands. After experimenting with parity nodes, Dapper settled on
            running their own cluster of geth nodes. Initial set up was
            completed by two developers full time over the course of two weeks,
            using clusters of nodes that went straight to failover instead of
            load balancing. If Dapper’s nodes fell out of sync, they would fail
            over to the next node. Dapper also only pointed to one node at a
            time, resolving their consistency issues. Running nodes internally
            was a bit better in stability and allowed Dapper certain signing
            capabilities. However, their nodes would still fall out of sync or
            drop peers.
          </Typography>

          <Box className="highlightedText">
            <Typography variant="body1">
              "Every state issue you could think of on CryptoKitties happened.
              If nodes were out of sync, the user experience and entire dApp
              would be messed up."
            </Typography>
            <Typography variant="subtitle2" gutterBottom component="small">
              - Eric Lin, Dapper
            </Typography>
          </Box>
          <Typography component="p">
            The problems were difficult to diagnose. In the end, the culprit was
            the stability of their own geth nodes. Dapper saw an hour or two
            hours of downtime at a time. To fix that, Dapper added health checks
            to check the head of the chain versus Etherscan. Even so, peer
            connections were dropped without explanation. At some point, the
            team used a combination of in-house and outsourced solutions. Their
            own nodes still ended up performing better. Plus, Dapper could fix
            issues with their in-house nodes faster.
          </Typography>
          <Typography component="p">
            The node issues affected CryptoKitties users, who got frustrated
            with the experience. CryptoKitties had a community manager but no
            support team members to troubleshoot specific customer issues. When
            nodes broke, CryptoKitties would get backed up. The chain would be
            ahead of the database, and kitten births would not happen.
            Transactions were written to the chain, but CryptoKitties users
            could not see them. For instance, one CryptoKitty would seem to be
            owned by two people, or someone would place a cat on auction when in
            reality, the cat was already sold.
          </Typography>
          <Typography component="p">
            The Dapper team had to implement a rotation since engineers were
            being woken up at 2 AM. If a node fell out of sync, the script would
            point at the next node. This script was super critical, as nodes
            tended to fail all the time, including in the middle of the night.
            Around forks and upgrades, the CryptoKitties team only had to
            upgrade once and did not have to deal with any hard forks.
          </Typography>
          <Box className="highlightedText">
            <Typography variant="body1">
              "We only ever had one or two people on call and performing
              maintenance on nodes, so it was pretty taxing work." - Eric Lin,
              Dapper
            </Typography>
            <Typography variant="subtitle2" gutterBottom component="small">
              - Eric Lin, Dapper
            </Typography>
          </Box>
          <Typography variant="h2">
            Dapper hasn't experienced any issues on Alchemy and could
            re-resource to other areas.
          </Typography>
          <Typography component="p">
            Since switching off their in house solution and other providers to
            only using Alchemy, Dapper Labs has entirely resolved all of those
            previous pain points. With Alchemy, the developer experience has
            been great. Dapper included the shift to Alchemy on the planning
            roadmap since it was so stable.
          </Typography>
          <Typography component="p">
            The Dapper Labs team was able to re-resource almost all of the
            resources towards other areas. The two developers who were working
            on nodes are now working on R&D and on building other games and
            experiences. The Alchemy team makes Dapper feel very well cared for.
            Plus, the Dapper team has peace of mind that they do not need to
            worry about an additional aspect of blockchain development,
            especially infrastructure stability.
          </Typography>
          <div className="dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        </Box>
      </Container>
    </section>
  );
};
