class USBDevice {
private:
    long m_id;
public:
    USBDevice(long id) : m_id(id) {}
    long getID() { return m_id; }
}

class NetworkDevice {
private:
    long m_id;
public:
    NetworkDevice(long id) : m_id(id) {}
    long getID() { return m_id; }
}

class WirelessAdapter : public USBDevice, public NetworkDevice {
public:
    WirelessAdapter(long usbId, long networkId) :
        USBDevice(usbId), NetworkDevice(networkId) {}
};

int main() {
    WirelessAdapter c54G(6334, 292651);
    std::cout << c54G.getID();      // какую версию getID() здесь следует вызвать?
    return 0;
}