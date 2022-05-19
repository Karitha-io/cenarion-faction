# REALM Distribution Scripts

There are two components to the distribution:

1. Acquiring exact REALM that should be distributed per wallet address
2. Distributing these amounts via [erdjs](https://docs.elrond.com/sdk-and-tools/erdjs/erdjs/)

## Installation/Setup

1. Install node
2. Run `npm install` inside both `acquire` and `distribute` directories (they are separate modules)
3. Create a directory `wallet` inside the `distribute` directory
   1. Place the cenarion distribution wallet keystore file into the `wallet` directory
   2. Derive the [wallet PEM](https://docs.elrond.com/sdk-and-tools/erdpy/deriving-the-wallet-pem-file/) and place into the `wallet` directory

**WARNING: Never commit anything in the `wallet` directory - the `.gitignore` specifically excludes these files**

## Scripts

### Acquire

The acquire script has hardcoded details for both Cartography Guild owners, and General Store loaners. It will however dynamically determine who ring owners are on running; this does have the downside that partial ownership during any period between script runs is not taken into account.

To run, simply input the total amount of REALM required for distribution when invoking the scripts, e.g.:

`node index.js 6000`

This will output a `distribution.json` file into the `acquire` directory root, and will also output the breakdown to the command line.

This process combines all amounts for a wallet into one figure; e.g. if you own a ring, and have a General Store on loan, it will combine these amounts into one figure for your address.

Inspect the `distribution.json` visually to confirm it looks correct before moving to the next stage. This is an intentional airgap to prevent any potential mishaps.

Note the rings acquisition contains a blacklist for certain wallets (such as faction wallets) to ensure they are held by valid entities.

### Distribute

Take the `distribution.json` file from the acquire stage above and place into the `distribute` root directory. You can then simply invoke the distribute script:

`node index.js`

It will synchronously process each transaction, and log the output to `distro.log` as well at the command line. This can take some time.

An optimisation would be to make the process fully asynchronous, but at a small number of addresses total it is not too onerous.

After running, the `distribution.json` file can be moved into the `archive` directory and renamed `distribution_YYYYMMDD.json` to keep a historical record if required.